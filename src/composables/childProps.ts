let childProps: childPropsFun = function (props) {
  let childHeight = props.height / 2;
  let childWidth = props.width / 2;

  let offset = Math.ceil(Math.pow(2, props.layer));

  let childLeftTop = {
    x: props.x,
    y: props.y,
  };
  let childRightTop = {
    x: props.x + offset,
    y: props.y,
  };
  let childLeftBottom = {
    x: props.x,
    y: props.y + offset,
  };
  let childRightBottom = {
    x: props.x + offset,
    y: props.y + offset,
  };
  let childLayer = props.layer - 1;

  return {
    childHeight,
    childWidth,
    childLayer,
    childLeftTop,
    childLeftBottom,
    childRightBottom,
    childRightTop,
  };
};

export default childProps;

interface childPropsFun {
  (props: funArg): funReturn;
}

interface funReturn {
  childHeight: number;
  childWidth: number;
  childLayer: number;
  childLeftTop: locate;
  childLeftBottom: locate;
  childRightBottom: locate;
  childRightTop: locate;
}

interface funArg {
  height: number;
  width: number;
  x: number;
  y: number;
  layer: number;
}

interface locate {
  x: number;
  y: number;
}
