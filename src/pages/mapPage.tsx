import React from "react";
import MapComponent from "./Map/mapa";
import { Chip, Group } from "@mantine/core";

export default function MapPage() {
  return (
    <div>
      <Chip.Group multiple>
        <Group position="center" mt="md">
          <Chip value="1">Multiple chips</Chip>
          <Chip value="2">Can be selected</Chip>
          <Chip value="3">At a time</Chip>
        </Group>
      </Chip.Group>
      <MapComponent />
    </div>
  );
}
