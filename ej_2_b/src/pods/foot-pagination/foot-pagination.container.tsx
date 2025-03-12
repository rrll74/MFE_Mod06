import React from 'react';
import { FootPagination } from './foot-pagination.vm';
import { FootPaginationComponent } from './foot-pagination.component';

interface Props {
  currentPage: number;
  info: FootPagination;
  onPageChange: (event: React.ChangeEvent<unknown>, value: number) => void;
}

export const FootPaginationContainer: React.FunctionComponent<Props> = (
  props
) => {
  const { currentPage, info, onPageChange } = props;

  return (
    <FootPaginationComponent
      currentPage={currentPage}
      info={info}
      onPageChange={onPageChange}
    />
  );
};
