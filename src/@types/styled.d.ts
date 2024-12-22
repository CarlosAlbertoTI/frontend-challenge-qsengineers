// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      main: string;
      lighterGray: string;
      lightGray: string;
      mediumGray: string;
      darkerGray: string;
      darkBackground: string;
      color: string;
    };
  }
}
