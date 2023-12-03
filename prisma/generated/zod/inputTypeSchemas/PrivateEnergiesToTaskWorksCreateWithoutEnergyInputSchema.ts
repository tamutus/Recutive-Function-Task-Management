import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { isValidDecimalInput } from './isValidDecimalInput';
import { DecimalJSLikeSchema } from './DecimalJsLikeSchema';
import { TaskWorkCreateNestedOneWithoutPrivateEnergyChangesInputSchema } from './TaskWorkCreateNestedOneWithoutPrivateEnergyChangesInputSchema';

export const PrivateEnergiesToTaskWorksCreateWithoutEnergyInputSchema: z.ZodType<Prisma.PrivateEnergiesToTaskWorksCreateWithoutEnergyInput> = z.object({
  startingValue: z.union([z.number(),z.string(),DecimalJSLikeSchema,]).refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' }),
  endingValue: z.union([z.number(),z.string(),DecimalJSLikeSchema,]).refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' }),
  work: z.lazy(() => TaskWorkCreateNestedOneWithoutPrivateEnergyChangesInputSchema)
}).strict();

export default PrivateEnergiesToTaskWorksCreateWithoutEnergyInputSchema;
