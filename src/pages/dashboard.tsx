import { useEffect, useState } from "react"
import { Link } from 'react-router-dom'

import { getAll } from "../api/products"
import { IProduct } from "../models"

const Dashboard = () => {
    const [products, setProducts] = useState<IProduct[]>([])

    const fetchProducts = async () => {
        const { data } = await getAll()
        setProducts(data)
    }

    useEffect(() => {
        fetchProducts()
    }, [])

    return <>
        <h2>Product list</h2>
        <div className="overflow-x-auto rounded-lg border border-gray-400">
            <table className="min-w-full divide-y-2 divide-gray-200 text-sm border-collapse" >
                <thead className="bg-gray-400">
                    <tr>
                        <th
                            className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900 text-center border border-slate-300"
                        >
                            Tên sản phẩm
                        </th>
                        <th
                            className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900 text-center border border-slate-300"
                        >
                            Giá
                        </th>
                        <th
                            className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900 text-center border border-slate-300"
                        >
                            Giá khuyến mãi
                        </th>
                        <th
                            className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900 text-center border border-slate-300"
                        >
                            Hình ảnh
                        </th>
                        <th
                            className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900 text-center border border-slate-300"
                        >
                            Thao tác
                        </th>
                    </tr>
                </thead>

                <tbody className="divide-y divide-gray-200">
                    {products.map(product => (
                        <tr>
                            <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-center border border-slate-300">
                                <Link to={`/admin/product/${product.id}`}>
                                    {product.name}
                                </Link>
                            </td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700 border border-slate-300">{product.price}</td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700 border border-slate-300">{product.original_price}</td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700 border border-slate-300">
                                <img className="w-[30%]" src={product.images?.[0].base_url} alt="" />
                            </td>
                            <td className="text-center border border-slate-300">
                                <button className="bg-red-600 text-white rounded-md p-2">Xoá</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

    </>
}

export default Dashboard
