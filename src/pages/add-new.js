import { PlusOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import DashboardLayout from "../components/Layout";

import { createList } from "../store/reducers/kangaroo_slice";

import {
  Button,
  Col,
  DatePicker,
  Drawer,
  Form,
  Input,
  Row,
  Select,
  Space,
  message,
  InputNumber,
} from "antd";
import { useState } from "react";
const { Option } = Select;

const AddNew = () => {
  const store = useSelector((state) => state.listings);

  const [form] = Form.useForm();
  const [open, setOpen] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();

  const dispatch = useDispatch();

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  const onFinish = (items) => {
    const { name } = items;
    const findName = store?.listings.find((i) => i.name == name);

    if (!findName) {
      dispatch(
        createList({
          id: new Date().getTime(),
          ...items,
        })
      );
      messageApi.open({
        type: "success",
        content: "New kangaroo has been added.",
      });

      setTimeout(() => {
        form.resetFields();
      }, 1000);
    }
  };

  return (
    <>
      <DashboardLayout>
        {contextHolder}

        <Form
          form={form}
          id="listingForm"
          layout="vertical"
          hideRequiredMark
          onFinish={onFinish}
        >
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="name"
                label="Name"
                rules={[
                  {
                    required: true,
                    message: "Please enter Name",
                  },
                  {
                    message: "Sorry, this name is already taken.",
                    validator: (_, value) => {
                      const findName = store?.listings.find(
                        (i) => i.name == value
                      );

                      if (!findName) {
                        return Promise.resolve();
                      } else {
                        return Promise.reject(
                          "Sorry, this name is already taken."
                        );
                      }
                    },
                  },
                ]}
              >
                <Input size={"large"} />
              </Form.Item>

              <Form.Item
                name="nickname"
                label="Nickname"
                rules={[
                  {
                    required: true,
                    message: "Please enter Nickname",
                  },
                ]}
              >
                <Input size={"large"} />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={6}>
              <Form.Item
                name="weight"
                label="Weight"
                rules={[
                  {
                    required: true,
                    message: "Please enter Weight",
                  },
                ]}
              >
                <InputNumber min={1} size={"large"} />
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item
                name="height"
                label="Height"
                rules={[
                  {
                    required: true,
                    message: "Please enter Height",
                  },
                ]}
              >
                <InputNumber min={1} size={"large"} />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col span={6}>
              <Form.Item
                name="gender"
                label="Gender"
                rules={[
                  {
                    required: true,
                    message: "Please enter Gender",
                  },
                ]}
              >
                <Select size={"large"}>
                  <Option value="Male">Male</Option>
                  <Option value="Female">Female</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item
                name="color"
                label="Color"
                rules={[
                  {
                    required: true,
                    message: "Please enter Color",
                  },
                ]}
              >
                <Input size={"large"} />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col span={6}>
              <Form.Item
                name="friendliness"
                label="Friendliness"
                rules={[
                  {
                    required: true,
                    message: "Please enter Friendliness",
                  },
                ]}
              >
                <Select size={"large"}>
                  <Option value="Friendly">Friendly</Option>
                  <Option value="Not Friendly">Not Friendly</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item
                name="birthday"
                label="Birthday"
                rules={[
                  {
                    required: true,
                    message: "Please enter url",
                  },
                ]}
              >
                <DatePicker
                  size={"large"}
                  format="YYYY-MM-DD"
                  style={{ width: "100%" }}
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </DashboardLayout>
    </>
  );
};
export default AddNew;
