import styled from "styled-components";
import { ClipLoader } from "react-spinners";

const Loader = styled(ClipLoader)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export default Loader;
