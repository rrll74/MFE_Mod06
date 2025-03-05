import React from 'react';
import Pagination from '@mui/material/Pagination';
import { FootPagination } from './foot-pagination.vm';

interface Props {
  currentPage: number;
  info: FootPagination;
  onPageChange: (event: React.ChangeEvent<unknown>, value: number) => void;
}

export const FootPaginationComponent: React.FunctionComponent<Props> = (
  props
) => {
  const { currentPage, info, onPageChange } = props;
  const pages = info?.pages || 1;

  return (
    <Pagination
      count={pages}
      page={currentPage}
      color="primary"
      onChange={onPageChange}
    />
  );
};
