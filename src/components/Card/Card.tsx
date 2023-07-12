import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import { Song } from 'src/types/types.type';

interface Props{
  song:any,
  img:any
}
export default function MediaControlCard({song,img}:Props) {
  const theme = useTheme();
  img = song.banner
  return (
    <div className="hover:opacity-100 hover:bg-black ">
    <Card sx={{ display: 'flex' , cursor:'pointer'}}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        
      </Box>
      <CardMedia
        component="img"
        sx={{ height:'200px',":hover":'opacity-50, shadow-slate-100,bg-white',objectFit:'revert' }}
        image={song.banner || song.thumbnail }
        alt="Live from space album cover"
      />
    </Card>
    </div>
  );
}
