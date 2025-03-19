import { usePointerPosition } from "../../hooks/use-pointer-position";
import { useDelayedValue } from "../../hooks/use-delayed-value";
import Dot from "../../components/Dot.jsx"

export default function FunCursor() {
    const dotConfig = [
        { delay: 0, opacity: 1 },
        { delay: 200, opacity: 0.9 },
        { delay: 200, opacity: 0.8 },
        { delay: 200, opacity: 0.7 },
        { delay: 200, opacity: 0.6 },
        { delay: 150, opacity: 0.5 },
        { delay: 150, opacity: 0.4 },
        { delay: 100, opacity: 0.3 },
        { delay: 100, opacity: 0.2 },
        { delay: 50, opacity: 0.1 },
    ]

    const pos1 = usePointerPosition();
    const pos2 = useDelayedValue(pos1, dotConfig[1].delay);
    const pos3 = useDelayedValue(pos2, dotConfig[2].delay);
    const pos4 = useDelayedValue(pos3, dotConfig[3].delay);
    const pos5 = useDelayedValue(pos4, dotConfig[4].delay);
    const pos6 = useDelayedValue(pos5, dotConfig[5].delay);
    const pos7 = useDelayedValue(pos6, dotConfig[6].delay);
    const pos8 = useDelayedValue(pos7, dotConfig[7].delay);
    const pos9 = useDelayedValue(pos8, dotConfig[8].delay);
    const pos10 = useDelayedValue(pos9, dotConfig[9].delay);

    const positions = [pos1, pos2, pos3, pos4, pos5, pos6, pos7, pos8, pos9, pos10];

    return (
        <>
            {positions.map((position, index) => <Dot key={index} position={position} opacity={dotConfig[index].opacity} />)}
        </>
    );
}
