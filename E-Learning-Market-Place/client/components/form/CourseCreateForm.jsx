import { React } from "react";
import { Select, Button, Avatar } from "antd";
import { SaveOutlined } from "@ant-design/icons";

const Option = Select;

const CourseCreateForm = ({
  handleSubmit,
  handleChange,
  handleImage,
  values,
  setValues,
  preview,
  uploadButtonText
}) => {
  const children = [];

  for (var i = 9.99; i <= 99.99; i++) {
    children.push(<Option key={i.toFixed(2)}>${i.toFixed(2)}</Option>);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group pt-3 pb-3">
        <input
          type="text"
          name="name"
          className="form-control"
          placeholder="Name"
          value={values.name}
          onChange={handleChange}
        />
      </div>

      <div className="form-group pt-3 pb-3">
        <textarea
          name="description"
          cols="7"
          rows="7"
          className="form-control"
          value={values.description}
          onChange={handleChange}
        ></textarea>
      </div>

      <div className="form-row pt-3 pb-3">
        <div className="col">
          <div className="form-group">
            <Select
              style={{ width: "100%" }}
              size="large"
              value={values.paid}
              onChange={(v) => setValues({ ...values, paid: !values.paid })}
            >
              <Option value={true}>Paid</Option>
              <Option value={false}>Free</Option>
            </Select>
          </div>
        </div>
        {values.paid && (
          <div className="form-group pt-3">
            <Select
              defaultValue="$9.99"
              style={{ width: "100%" }}
              onChange={(v) => setValues({ ...values, price: v })}
              tokenSeparators={[,]}
              size="large"
            >
              {children}
            </Select>
          </div>
        )}
      </div>

      <div className="form-group pt-3 pb-3">
        <input
          type="text"
          name="category"
          className="form-control"
          placeholder="Category"
          value={values.category}
          onChange={handleChange}
        />
      </div>

      <div className="form-row pt-3 pb-3">
        <div className="col">
          <div className="form-group">
            <label className="btn btn-outline-secondary btn-block text-left">
              {uploadButtonText}
              <input
                type="file"
                name="image"
                onChange={handleImage}
                accept="image/*"
                hidden
              />
            </label>
          </div>
        </div>
        {preview && (
          <div className="col-md-6">
            <Avatar width={200} src={preview} />
          </div>
        )}
      </div>

      <div className="row pt-3 pb-3">
        <div className="col">
          <Button
            onClick={handleSubmit}
            disabled={values.loading || values.uploading}
            className="btn btn-primary"
            icon={<SaveOutlined />}
            type="primary"
            size="large"
            loading={values.loading}
            shape="round"
          >
            {values.loading ? "Saving" : "Save & Continue"}
          </Button>
        </div>
      </div>
    </form>
  );
};

export default CourseCreateForm;
