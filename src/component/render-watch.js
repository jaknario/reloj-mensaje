/**
 *
 * @param {HTMLDivElement} element
 */
export const renderClock = ( element ) => {
  const createClockElement = ( className, id ) => {
    const container = document.createElement("div");
    container.className = className;
    if (id) container.id = id;
    element.appendChild(container);
    return container;
  };

  const hourContainer = createClockElement("hour");
  createClockElement("hr", "hr", hourContainer);

  const minuteContainer = createClockElement("min");
  createClockElement("mnt", "mn", minuteContainer);

  const secondContainer = createClockElement("sec");
  createClockElement("sc", "sc", secondContainer);
};
