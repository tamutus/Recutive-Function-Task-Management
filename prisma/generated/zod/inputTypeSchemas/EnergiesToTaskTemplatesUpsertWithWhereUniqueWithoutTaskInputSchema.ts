import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergiesToTaskTemplatesWhereUniqueInputSchema } from './EnergiesToTaskTemplatesWhereUniqueInputSchema';
import { EnergiesToTaskTemplatesUpdateWithoutTaskInputSchema } from './EnergiesToTaskTemplatesUpdateWithoutTaskInputSchema';
import { EnergiesToTaskTemplatesUncheckedUpdateWithoutTaskInputSchema } from './EnergiesToTaskTemplatesUncheckedUpdateWithoutTaskInputSchema';
import { EnergiesToTaskTemplatesCreateWithoutTaskInputSchema } from './EnergiesToTaskTemplatesCreateWithoutTaskInputSchema';
import { EnergiesToTaskTemplatesUncheckedCreateWithoutTaskInputSchema } from './EnergiesToTaskTemplatesUncheckedCreateWithoutTaskInputSchema';

export const EnergiesToTaskTemplatesUpsertWithWhereUniqueWithoutTaskInputSchema: z.ZodType<Prisma.EnergiesToTaskTemplatesUpsertWithWhereUniqueWithoutTaskInput> = z.object({
  where: z.lazy(() => EnergiesToTaskTemplatesWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => EnergiesToTaskTemplatesUpdateWithoutTaskInputSchema),z.lazy(() => EnergiesToTaskTemplatesUncheckedUpdateWithoutTaskInputSchema) ]),
  create: z.union([ z.lazy(() => EnergiesToTaskTemplatesCreateWithoutTaskInputSchema),z.lazy(() => EnergiesToTaskTemplatesUncheckedCreateWithoutTaskInputSchema) ]),
}).strict();

export default EnergiesToTaskTemplatesUpsertWithWhereUniqueWithoutTaskInputSchema;
