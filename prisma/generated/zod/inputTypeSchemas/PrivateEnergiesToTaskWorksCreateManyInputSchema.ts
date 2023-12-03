import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { isValidDecimalInput } from './isValidDecimalInput';
import { DecimalJSLikeSchema } from './DecimalJsLikeSchema';

export const PrivateEnergiesToTaskWorksCreateManyInputSchema: z.ZodType<Prisma.PrivateEnergiesToTaskWorksCreateManyInput> = z.object({
  energyId: z.number().int(),
  workId: z.number().int(),
  startingValue: z.union([z.number(),z.string(),DecimalJSLikeSchema,]).refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' }),
  endingValue: z.union([z.number(),z.string(),DecimalJSLikeSchema,]).refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' })
}).strict();

export default PrivateEnergiesToTaskWorksCreateManyInputSchema;
