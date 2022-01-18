// ----------------------------------------------------------------------

export default function Card(theme:any) {
  return {
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: theme.shape.borderRadius,
          position: 'relative',
          padding: theme.spacing(0.5),
          boxShadow: 'none',
          backgroundColor:theme.palette.grey[370],
          zIndex: 0 
        }
      }
    },
    MuiCardHeader: {
      defaultProps: {
        titleTypographyProps: { variant: 'h6' },
        subheaderTypographyProps: { variant: 'body2' }
      },
      styleOverrides: {
        root: {
          padding: theme.spacing(2, 2, 0)
        }
      }
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: theme.spacing(2)
        }
      }
    }
  };
}
