import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { isValidDecimalInput } from './isValidDecimalInput';
import { DecimalJSLikeSchema } from './DecimalJsLikeSchema';
import { TaskWorkCreateNestedOneWithoutEnergyChangesInputSchema } from './TaskWorkCreateNestedOneWithoutEnergyChangesInputSchema';

export const EnergiesToTaskWorksCreateWithoutEnergyInputSchema: z.ZodType<Prisma.EnergiesToTaskWorksCreateWithoutEnergyInput> = z.object({
  startingValue: z.union([z.number(),z.string(),DecimalJSLikeSchema,]).refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' }),
  endingValue: z.union([z.number(),z.string(),DecimalJSLikeSchema,]).refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' }),
  work: z.lazy(() => TaskWorkCreateNestedOneWithoutEnergyChangesInputSchema)
}).strict();

export default EnergiesToTaskWorksCreateWithoutEnergyInputSchema;
