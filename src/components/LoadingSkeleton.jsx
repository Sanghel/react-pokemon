import React from 'react';
import { Skeleton } from '@mui/material';
import '../styles/LoadingSkeleton.css';

function LoadingSkeleton() {
  return (
    <>
      <Skeleton className='card-skeleton' variant="rounded" width={210} height={300} />
      <Skeleton className='card-skeleton' variant="rounded" width={210} height={300} />
      <Skeleton className='card-skeleton' variant="rounded" width={210} height={300} />
      <Skeleton className='card-skeleton' variant="rounded" width={210} height={300} />
      <Skeleton className='card-skeleton' variant="rounded" width={210} height={300} />
      <Skeleton className='card-skeleton' variant="rounded" width={210} height={300} />
      <Skeleton className='card-skeleton' variant="rounded" width={210} height={300} />
      <Skeleton className='card-skeleton' variant="rounded" width={210} height={300} />
      <Skeleton className='card-skeleton' variant="rounded" width={210} height={300} />
      <Skeleton className='card-skeleton' variant="rounded" width={210} height={300} />
    </>
  )
}

export { LoadingSkeleton };