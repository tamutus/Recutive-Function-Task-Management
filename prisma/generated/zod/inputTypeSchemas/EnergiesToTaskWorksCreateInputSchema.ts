import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { isValidDecimalInput } from './isValidDecimalInput';
import { DecimalJSLikeSchema } from './DecimalJsLikeSchema';
import { EnergyCreateNestedOneWithoutTaskWorkInputSchema } from './EnergyCreateNestedOneWithoutTaskWorkInputSchema';
import { TaskWorkCreateNestedOneWithoutEnergyChangesInputSchema } from './TaskWorkCreateNestedOneWithoutEnergyChangesInputSchema';

export const EnergiesToTaskWorksCreateInputSchema: z.ZodType<Prisma.EnergiesToTaskWorksCreateInput> = z.object({
  startingValue: z.union([z.number(),z.string(),DecimalJSLikeSchema,]).refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' }),
  endingValue: z.union([z.number(),z.string(),DecimalJSLikeSchema,]).refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' }),
  energy: z.lazy(() => EnergyCreateNestedOneWithoutTaskWorkInputSchema),
  work: z.lazy(() => TaskWorkCreateNestedOneWithoutEnergyChangesInputSchema)
}).strict();

export default EnergiesToTaskWorksCreateInputSchema;
