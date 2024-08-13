import {
  Box,
  Flex,
  Table,
  TableContainer,
  Tbody,
  Td,
  Thead,
  Tr,
  Th,
} from "@chakra-ui/react";
import React, { FC, useEffect, useState } from "react";
import axios from "axios";
import { useTranslation, UseTranslation } from "next-i18next";

interface User {
  id: number,
  name: string,
  username: string,
  email: string
}

const TableUsers: FC = () => {
  const [data, setData] = useState<User[]>([]);
  const { t } = useTranslation("common");

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("https://jsonplaceholder.typicode.com/users");
      setData(res.data);
    };

    fetchData();
  }, []);

  return (
    <Flex justifyContent={"space-between"} alignItems={"center"}>
      <TableContainer mt={"5rem"}>
        <Table size={{ base: "sm", md: "lg" }}>
          <Thead>
            <Tr>
              <Th>{t("id-list")}</Th>
              <Th>{t("name")}</Th>
              <Th>{t("userName-list")}</Th>
              <Th>{t("email")}</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.map((item) => (
              <Tr key={item.id}>
                <Td>{item.id}</Td>
                <Td>{item.name}</Td>
                <Td>{item.username}</Td>
                <Td>{item.email}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Flex>
  );
};

export default TableUsers;
