// ----------------------------------------------------------------------

export default function Typography(theme:any) {
  return {
    MuiTypography: {
      styleOverrides: {
        root: {
        },
        paragraph: {
          marginBottom: theme.spacing(2),
          letterSpacing: '0.05em',
       
        },
        h2:{
          color:"#fff"
        },
        h3:{
          color:"#fff"
        },
        h4:{
          color:"#fff"
        },
        h6:{
          color:"#fff",
          fontSize:"1rem !important",
        },
        subtitle2:{
          color:"#fff",
          fontSize:"1rem",
        },
        body2:{
          fontSize:"1.8rem",
          color:theme.palette.grey[340],
          fontWeight:600
        },
        body1:{
          fontSize:"0.8rem",
          color:theme.palette.grey[340],
          fontWeight:300
        },
        gutterBottom: {
          marginBottom: theme.spacing(1)
        }
      }
    }
  };
}
