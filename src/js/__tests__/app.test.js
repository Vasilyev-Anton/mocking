import getLevel from '../app';
import fetchData from '../http';

jest.mock('../http');

test('should return level info for status "ok"', () => {
  fetchData.mockReturnValue({ status: 'ok', level: 30 });
  expect(getLevel(1)).toBe('Ваш текущий уровень: 30');
});

test('should return error message for status not "ok"', () => {
  fetchData.mockReturnValue({ status: 'error' });
  expect(getLevel(1)).toBe('Информация об уровне временно недоступна');
});
