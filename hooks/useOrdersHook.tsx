import {
  GetOrderQuery,
  GetOrdersQuery,
  OrderDirection,
  Order_OrderBy,
  useGetOrderLazyQuery,
  useGetOrdersLazyQuery
} from '@/graphql'

import { useEffect } from 'react'

type TGetOrdersHookReturnType = {
  getOrders: ReturnType<typeof useGetOrdersLazyQuery>[0]
  getOrder: ReturnType<typeof useGetOrderLazyQuery>[0]
  resultsResponse: GetOrdersQuery | undefined
  resultsCalled: boolean
  lastOrderResponse: GetOrderQuery | undefined
  lastOrderCalled: boolean
}
type GetOrdersHookArgsType = {
  // Add any additional arguments you need for the hook
}

const useOrdersHook = (): TGetOrdersHookReturnType => {
  const [getOrders, { data: resultsResponse, called: resultsCalled }] =
    useGetOrdersLazyQuery()
  const [getOrder, { data: lastOrderResponse, called: lastOrderCalled }] =
    useGetOrderLazyQuery()
  useEffect(() => {
    if (!resultsCalled) {
      getOrders({
        variables: {
          orderBy: Order_OrderBy.Id,
          orderDirection: OrderDirection.Desc
          // TODO: Add filter by consumer
          // where: {
          //   [Order_OrderBy.consumer_]: ''
          // }
        }
      })
    }
  }, [getOrders, resultsCalled])

  useEffect(() => {
    if (
      !lastOrderCalled &&
      resultsResponse?.orders &&
      resultsResponse?.orders.length > 0
    ) {
      getOrder({
        variables: {
          id: resultsResponse.orders[0].id
        }
      })
      console.log(resultsResponse)
    }
  }, [resultsResponse, lastOrderCalled, getOrder])
  return {
    getOrders,
    getOrder,
    resultsResponse,
    resultsCalled,
    lastOrderResponse,
    lastOrderCalled
  }
}
export default useOrdersHook
