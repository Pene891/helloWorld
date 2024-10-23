import { say } from "cowsay";
import "dotenv/config";



console.log(

  say({
    text:`I'm ${process.env.NAME} from ${process.env.CAMPUS}`,
    e: "oO",
    T: "U ",
  })
);

// or cowsay.think()
