import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, Link } from '@mui/material';
import { CharacterEntityApi } from 'pods/character-collection/api';
import * as classes from './show-character.styles';

interface Props {
  character: CharacterEntityApi;
  onBack: () => void;
}

interface RowInfo {
  name: string;
  data: string | string[];
  type: string;
}

export const ShowCharacterComponent: React.FunctionComponent<Props> = (
  props
) => {
  const { character, onBack } = props;
  const [rows, setRows] = React.useState<RowInfo[]>([]);

  React.useEffect(() => {
    if (character) {
      const info: RowInfo[] = [];

      for (const property in character) {
        if (character.hasOwnProperty(property)) {
          if (
            typeof character[property] === 'object' &&
            character[property] !== null &&
            !Array.isArray(character[property])
          ) {
            info.push(createData(property, character[property], 'object'));
          } else if (Array.isArray(character[property])) {
            info.push(createData(property, character[property], 'array'));
          } else {
            info.push(createData(property, character[property], 'string'));
          }
        }
      }
      setRows(info);
    }
  }, [character]);

  function createData(name: string, data: string | string[], type: string) {
    return { name, data, type };
  }

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
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell>
                  {row.type === 'string' ? (
                    row.name === 'url' ? (
                      <>
                        <Link href={row.data as string}>{row.data}</Link>
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
                          <Link href={link}>{link}</Link>
                          <br />
                        </>
                      );
                    })
                  ) : (
                    Object.keys(row.data).map((key) => {
                      return key === 'url' ? (
                        <>
                          <Link href={row.data[key]}>{row.data[key]}</Link>
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
