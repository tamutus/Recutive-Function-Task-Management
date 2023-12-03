import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { isValidDecimalInput } from './isValidDecimalInput';
import { DecimalJSLikeSchema } from './DecimalJsLikeSchema';
import { EnergyCreateNestedOneWithoutTaskWorkInputSchema } from './EnergyCreateNestedOneWithoutTaskWorkInputSchema';

export const EnergiesToTaskWorksCreateWithoutWorkInputSchema: z.ZodType<Prisma.EnergiesToTaskWorksCreateWithoutWorkInput> = z.object({
  startingValue: z.union([z.number(),z.string(),DecimalJSLikeSchema,]).refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' }),
  endingValue: z.union([z.number(),z.string(),DecimalJSLikeSchema,]).refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' }),
  energy: z.lazy(() => EnergyCreateNestedOneWithoutTaskWorkInputSchema)
}).strict();

export default EnergiesToTaskWorksCreateWithoutWorkInputSchema;
