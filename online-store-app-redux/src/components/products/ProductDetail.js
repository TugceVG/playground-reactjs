import React from "react";
import SelectInput from "../toolbox/SelectInput";
import TextInput from "../toolbox/TextInput";

const ProductDetail = ({ categories, product, onSave, onChange }) => {
    console.log({ categories });
    return (
        <form onSubmit={onSave}>
            <h2>{product.id ? "Update" : "Add"}</h2>
            <TextInput name="productName" label="Product Name" value={product.ProductName} onChange={onChange} error="Hata" />
            <SelectInput
                name="categoryId"
                label="Category"
                value={product.categoryId || ""}
                defaultOption="Choose"
                options={categories.map(category => ({
                    value: category.id,
                    text: category.categoryName
                }))}
                onChange={onChange}
                error="Hata"
            />
            <button type="submit" className="btn btn-success">Save</button>
        </form>
    )
}

export default ProductDetail;