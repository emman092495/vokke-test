import React from "react";
import DataGrid, { Column, Editing, Lookup } from "devextreme-react/data-grid";
import { useDispatch, useSelector } from "react-redux";

import { message } from "antd";

import { updateList, deleteList } from "../store/reducers/kangaroo_slice";

function KangarooTable() {
  const store = useSelector((state) => state.listings);
  const dispatch = useDispatch();
  const [messageApi, contextHolder] = message.useMessage();

  let listings = [];
  store.listings.forEach((device, index) => {
    listings[index] = { ...device };
  });

  const onSaved = (events) => {
    console.log(events);
    if (events?.changes && events?.changes[0]?.type !== "remove") {
      dispatch(updateList(events?.changes[0].data));

      messageApi.open({
        type: "success",
        content: "A list has been updated.",
      });
    }
  };

  const rowRemoved = (events) => {
    dispatch(deleteList(events.key));
    messageApi.open({
      type: "success",
      content: "A list has been deleted.",
    });
  };

  return (
    <div>
      {contextHolder}

      <h1>Kangaroo Lists</h1>
      <DataGrid
        dataSource={listings}
        keyExpr="id"
        allowColumnReordering={true}
        showBorders={true}
        onRowRemoved={rowRemoved}
        onSaved={(e) => onSaved(e)}
      >
        <Editing
          mode="form"
          allowUpdating={true}
          allowDeleting={true}
          allowAdding={false}
        />

        <Column caption="Name" dataField="name" />
        <Column caption="Nickname" dataField="nickname" visible={false} />
        <Column caption="Weight" dataField="weight" />
        <Column caption="Height" dataField="height" />

        <Column caption="Gender" dataField="gender" visible={false}>
          <Lookup
            dataSource={[
              {
                ID: 1,
                Name: "Male",
              },
              {
                ID: 2,
                Name: "Female",
              },
            ]}
            valueExpr="Name"
            displayExpr="Name"
          />
        </Column>

        <Column caption="Color" dataField="color" visible={false} />
        <Column caption="Friendliness" dataField="friendliness">
          <Lookup
            dataSource={[
              {
                ID: 1,
                Name: "Friendly",
              },
              {
                ID: 2,
                Name: "Not friendly",
              },
            ]}
            valueExpr="Name"
            displayExpr="Name"
          />
        </Column>
        <Column caption="BirthDate" dataField="birthday" dataType="date" />
      </DataGrid>
    </div>
  );
}

export default KangarooTable;
