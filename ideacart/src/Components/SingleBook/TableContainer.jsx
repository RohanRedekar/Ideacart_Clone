export const TableComp = ({ printType, pageCount, language, publisher }) => (
  <table width={"100%"}>
    <tbody>
      <tr style={{ borderBottom: "1px solid black", height: "2.5rem" }}>
        <th align='left'> Print Type</th>
        <td align='right'>{printType}</td>
      </tr>
    </tbody>
    <tbody>
      <tr style={{ borderBottom: "1px solid black", height: "2.5rem" }}>
        <th align='left'>Page Count</th>
        <td align='right'>{pageCount}</td>
      </tr>
    </tbody>
    <tbody>
      <tr style={{ borderBottom: "1px solid black", height: "2.5rem" }}>
        <th align='left'>Language</th>
        <td align='right'>{language}</td>
      </tr>
    </tbody>
    <tbody>
      <tr style={{ height: "2.5rem" }}>
        <th align='left'>Publisher</th>
        <td align='right'>{publisher}</td>
      </tr>
    </tbody>
  </table>
);
