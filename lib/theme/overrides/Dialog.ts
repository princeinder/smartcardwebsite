export default function Dialog(theme:any) {
    return {
      MuiDialog: {
        styleOverrides: {
          root: {
            backgroundColor:theme.palette.grey[350],
            boxShadow:"none"
          },
          paper: {
            backgroundColor:theme.palette.grey[350],
            boxShadow:"none"
          }
        }
      },
    };
  }
  