import { Button } from "@/components/ui/button";
import { TaskCardView } from "../TaskCard/TaskCardView";
import { useState } from "react";

export const TaskBoardContainer = () => {
  const taskStates = ["Not started", "In progress", "Completed", "Not completed"];
  const [shouldShowAddTaskCard, setShouldShowAddTaskCard] = useState(false);

  return (
    <main className="mx-auto mobile:pt-14 tablet:pt-20">
      <div className="2xl:max-w-[1500px] 3xl:m-auto pl-[calc(100vw-100%)] items-center">
        <div className="hidden gap-2 md:mx-5 md:mt-10 md:mb-5 md:grid md:grid-cols-6 tablet:mt-6 tablet:ml-10 tablet:mb-8 tablet:grid-cols-8 xl:grid-cols-11 ">
          <div className="col-span-3 md:col-span-4 tablet:col-span-3">TaskBoard</div>
        </div>
        <div className="hidden gap-8 md:grid tablet:grid-cols-12 ">
          <div className="grid grid-cols-1 md:grid-cols-4 h-[500px]">
            {taskStates.map((aTaskState) => {
              return (
                <div key={aTaskState} className="">
                  <p className="bg-slate-100 p-4">{aTaskState}</p>
                  {aTaskState === "Not started" ? (
                    <div className="float-left m-2">
                      <Button variant="outline" onClick={() => setShouldShowAddTaskCard(true)}>
                        Create task
                      </Button>
                    </div>
                  ) : (
                    <></>
                  )}
                </div>
              );
            })}
            <div className="row p-8">
              <div className="col-3">{shouldShowAddTaskCard && <TaskCardView />}</div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
