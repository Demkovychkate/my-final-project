// import * as React from 'react';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import { CardActionArea } from '@mui/material';

// const BaseModal = ({ title, image, description }) => (
//     <Card sx={{ maxWidth: 345 }}>
//       <CardActionArea>
//         <CardMedia
//           component='img'
//           height='300'
//           width='300'
//           image={image}
//         />
//         <CardContent>
//           <Typography gutterBottom variant='h5' component='div'>
//             {title}
//           </Typography>
//           <Typography variant='body2' color='text.secondary'>
//             {description}
//           </Typography>
//         </CardContent>
//       </CardActionArea>
//     </Card>
// );

// export default BaseModal;

'use client';

import Image from 'next/image';
import React from 'react';
import { CardBody, CardContainer, CardItem } from '../ui/3d-card.tsx';

const BaseModal = ({ title, image, description }) => ( 
    <CardContainer className='inter-var'>
      <CardBody className='bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  '>
        <CardItem
          translateZ='50'
          className='text-xl font-bold text-neutral-600 dark:text-white'
        >
          {title}
        </CardItem>
        <CardItem
          as='p'
          translateZ='60'
          className='text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300'
        >
          {description}
        </CardItem>
        <CardItem translateZ='100' className='w-full mt-4'>
          <Image
            src={image}
            height='1000'
            width='1000'
            className='h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl'
            alt='thumbnail'
          />
        </CardItem>    
      </CardBody>
    </CardContainer>
  );

export default BaseModal;