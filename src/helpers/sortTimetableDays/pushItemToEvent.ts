import Event from "../../types/Event";

type eventInfo = {
  main: string;
  extra: string;
  address?: string;
  interval?: string;
};

function pushItemToEvent(event: Event, info: eventInfo): Event {
  event.main.push(info.main);
  event.extra.push(info.extra);
  info.address ? event.address!.push(info.address) : event.address!.push("");
  info.interval ? (event.interval = info.interval) : void 0;

  return { ...event };
}

export default pushItemToEvent;
