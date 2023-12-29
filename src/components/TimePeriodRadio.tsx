import { Radio, RadioGroup, Stack } from "@chakra-ui/react";
import React from "react";
import { timePeriod_values } from "../utils/constants";

interface TimePeriodRadioProps {
    currTimePeriod: string;
    setCurrTimePeriod: React.Dispatch<React.SetStateAction<string>>;
}

const TimePeriodRadio: React.FC<TimePeriodRadioProps> = ({
    currTimePeriod,
    setCurrTimePeriod,
}) => {
    return (
        <RadioGroup display="flex" justifyContent="end" mt="10" mb="5" defaultValue="1h">
            <Stack direction="row">
                {timePeriod_values.map((item) => (
                    <Radio
                        onChange={(e) => setCurrTimePeriod(e.target.value)}
                        key={item}
                        value={item}
                        checked={item === currTimePeriod}
                    >
                        {item}
                    </Radio>
                ))}
            </Stack>
        </RadioGroup>
    );
};

export default TimePeriodRadio;
