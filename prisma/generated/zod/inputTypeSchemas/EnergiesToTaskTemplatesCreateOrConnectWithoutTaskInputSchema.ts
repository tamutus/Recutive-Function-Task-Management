import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergiesToTaskTemplatesWhereUniqueInputSchema } from './EnergiesToTaskTemplatesWhereUniqueInputSchema';
import { EnergiesToTaskTemplatesCreateWithoutTaskInputSchema } from './EnergiesToTaskTemplatesCreateWithoutTaskInputSchema';
import { EnergiesToTaskTemplatesUncheckedCreateWithoutTaskInputSchema } from './EnergiesToTaskTemplatesUncheckedCreateWithoutTaskInputSchema';

export const EnergiesToTaskTemplatesCreateOrConnectWithoutTaskInputSchema: z.ZodType<Prisma.EnergiesToTaskTemplatesCreateOrConnectWithoutTaskInput> = z.object({
  where: z.lazy(() => EnergiesToTaskTemplatesWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => EnergiesToTaskTemplatesCreateWithoutTaskInputSchema),z.lazy(() => EnergiesToTaskTemplatesUncheckedCreateWithoutTaskInputSchema) ]),
}).strict();

export default EnergiesToTaskTemplatesCreateOrConnectWithoutTaskInputSchema;
