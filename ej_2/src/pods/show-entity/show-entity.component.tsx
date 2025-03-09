import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, Link } from '@mui/material';
import * as classes from './show-entity.styles';
import { CharacterEntityApi } from 'pods/character-collection/api';
import { EpisodeEntityApi } from 'pods/episode/api';
import { LocationEntityApi } from 'pods/location/api';

interface Props {
  entity: CharacterEntityApi | LocationEntityApi | EpisodeEntityApi;
  onBack: () => void;
}

interface RowInfo {
  name: string;
  data: string | string[];
  type: string;
}

export const ShowEntityComponent: React.FunctionComponent<Props> = (props) => {
  const { entity, onBack } = props;
  const [rows, setRows] = React.useState<RowInfo[]>([]);

  React.useEffect(() => {
    if (entity) {
      const info: RowInfo[] = [];

      for (const property in entity) {
        if (entity.hasOwnProperty(property)) {
          if (
            typeof entity[property] === 'object' &&
            entity[property] !== null &&
            !Array.isArray(entity[property])
          ) {
            info.push(createData(property, entity[property], 'object'));
          } else if (Array.isArray(entity[property])) {
            info.push(createData(property, entity[property], 'array'));
          } else {
            info.push(createData(property, entity[property], 'string'));
          }
        }
      }
      setRows(info);
    }
  }, [entity]);

  const createData = (name: string, data: string | string[], type: string) => {
    return { name, data, type };
  };

  const substituteURL = (url: string, empty: boolean = false) => {
    console.log(url);
    const text = url.replace(
      process.env.OFICIAL_API_URL,
      empty ? '' : process.env.LOCAL_API_URL
    );
    console.log(text);
    return text;
  };

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Field</TableCell>
              <TableCell>Info</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={`fila_${row.name}`}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell key={`celda_${row.name}`}>
                  {row.type === 'string' ? (
                    row.name === 'url' ? (
                      <>
                        <Link href={substituteURL(row.data as string)}>
                          {substituteURL(row.data as string, true)}
                        </Link>
                        <br />
                      </>
                    ) : row.name == 'image' ? (
                      <img
                        src={row.data as string}
                        alt="character"
                        className={classes.characterImage}
                      />
                    ) : (
                      row.data
                    )
                  ) : row.type === 'array' ? (
                    (row.data as Array<string>).map((link) => {
                      return (
                        <>
                          <Link href={substituteURL(link)}>
                            {substituteURL(link, true)}
                          </Link>
                          <br />
                        </>
                      );
                    })
                  ) : (
                    Object.keys(row.data).map((key) => {
                      return key === 'url' ? (
                        <>
                          <Link href={substituteURL(row.data[key])}>
                            {substituteURL(row.data[key], true)}
                          </Link>
                          <br />
                        </>
                      ) : (
                        `${row.data[key]} `
                      );
                    })
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Button onClick={onBack} variant="contained">
        Go back
      </Button>
    </>
  );
};
