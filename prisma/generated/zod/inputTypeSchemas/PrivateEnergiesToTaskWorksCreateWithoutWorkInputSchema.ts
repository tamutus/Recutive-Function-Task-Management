import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { isValidDecimalInput } from './isValidDecimalInput';
import { DecimalJSLikeSchema } from './DecimalJsLikeSchema';
import { PrivateEnergyCreateNestedOneWithoutTaskWorkInputSchema } from './PrivateEnergyCreateNestedOneWithoutTaskWorkInputSchema';

export const PrivateEnergiesToTaskWorksCreateWithoutWorkInputSchema: z.ZodType<Prisma.PrivateEnergiesToTaskWorksCreateWithoutWorkInput> = z.object({
  startingValue: z.union([z.number(),z.string(),DecimalJSLikeSchema,]).refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' }),
  endingValue: z.union([z.number(),z.string(),DecimalJSLikeSchema,]).refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' }),
  energy: z.lazy(() => PrivateEnergyCreateNestedOneWithoutTaskWorkInputSchema)
}).strict();

export default PrivateEnergiesToTaskWorksCreateWithoutWorkInputSchema;
