export default function Input(theme:any) {
  return {
    MuiInputBase: {
      styleOverrides: {
        root: {
          backgroundColor: 'transparent',
          fontWeight:300,
          '&.Mui-disabled': {
            '& svg': { color: theme.palette.text.disabled }
          }
        },
        input: {
          color:theme.palette.grey[360],
          fontWeight:300,
          "&:-webkit-autofill":{
            borderColor: theme.palette.grey[350],
            color: theme.palette.grey[360],
            WebkitBoxShadow: `0 0 0 1000px transparent inset`,
            transition: 'background-color 5000s ease-in-out 0s, color 5000s ease-in-out 0s',
            transitionDelay: 'background-color 5000s, color 5000s'
          },
          '&::placeholder': {
            opacity: 1,
            fontWeight:300,
            color: theme.palette.grey[360]
          }
        }
      }
    },
    MuiInputLabel: {
      styleOverrides: {
      root: {
        color: theme.palette.grey[360],
      },
      }
    },
    MuiInput: {
      styleOverrides: {
        underline: {
          '&:before': {
            borderBottomColor: theme.palette.grey[350]
          }
        }
      }
    },
    MuiFilledInput: {
      styleOverrides: {
        root: {
          backgroundColor: 'transparent',
          '&:hover': {
            backgroundColor: theme.palette.grey[350]
          },
          '&.Mui-focused': {
            backgroundColor: theme.palette.action.focus
          },
          '&.Mui-disabled': {
            backgroundColor: theme.palette.action.disabledBackground
          }
        },
        underline: {
          '&:before': {
            borderBottomColor: theme.palette.grey[350]
          }
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: theme.palette.grey[350]
          },
          '&.Mui-disabled': {
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: theme.palette.action.disabledBackground
            }
          }
        }
      }
    }
  };
}
