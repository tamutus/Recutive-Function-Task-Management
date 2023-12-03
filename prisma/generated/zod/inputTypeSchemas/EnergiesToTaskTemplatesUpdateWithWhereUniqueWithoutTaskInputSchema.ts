import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergiesToTaskTemplatesWhereUniqueInputSchema } from './EnergiesToTaskTemplatesWhereUniqueInputSchema';
import { EnergiesToTaskTemplatesUpdateWithoutTaskInputSchema } from './EnergiesToTaskTemplatesUpdateWithoutTaskInputSchema';
import { EnergiesToTaskTemplatesUncheckedUpdateWithoutTaskInputSchema } from './EnergiesToTaskTemplatesUncheckedUpdateWithoutTaskInputSchema';

export const EnergiesToTaskTemplatesUpdateWithWhereUniqueWithoutTaskInputSchema: z.ZodType<Prisma.EnergiesToTaskTemplatesUpdateWithWhereUniqueWithoutTaskInput> = z.object({
  where: z.lazy(() => EnergiesToTaskTemplatesWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => EnergiesToTaskTemplatesUpdateWithoutTaskInputSchema),z.lazy(() => EnergiesToTaskTemplatesUncheckedUpdateWithoutTaskInputSchema) ]),
}).strict();

export default EnergiesToTaskTemplatesUpdateWithWhereUniqueWithoutTaskInputSchema;
