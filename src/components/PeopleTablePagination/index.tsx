import React from 'react';

const LIMIT = 10;

interface PeopleTablePaginationProps {
  page: number;
  total: number;
  onChange: (pageIndex: number) => void;
}

export const PeopleTablePagination = ({
  page,
  total,
  onChange,
}: PeopleTablePaginationProps) => {
  const totalPages = Math.ceil(total / LIMIT);
  return (
    <div>
      {Array.from({ length: totalPages }, (_, index) => index + 1).map(
        (pageIndex) => {
          const isActive = pageIndex === page;
          const action = () => onChange(pageIndex);
          return isActive ? <b key={pageIndex}>{pageIndex}</b> : <span key={pageIndex} style={{cursor: 'pointer'}} onChange={action}>{pageIndex}</span>;
        }
      )}
    </div>
  );
};
