import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateEnergiesToTaskTemplatesWhereUniqueInputSchema } from './PrivateEnergiesToTaskTemplatesWhereUniqueInputSchema';
import { PrivateEnergiesToTaskTemplatesUpdateWithoutTaskInputSchema } from './PrivateEnergiesToTaskTemplatesUpdateWithoutTaskInputSchema';
import { PrivateEnergiesToTaskTemplatesUncheckedUpdateWithoutTaskInputSchema } from './PrivateEnergiesToTaskTemplatesUncheckedUpdateWithoutTaskInputSchema';
import { PrivateEnergiesToTaskTemplatesCreateWithoutTaskInputSchema } from './PrivateEnergiesToTaskTemplatesCreateWithoutTaskInputSchema';
import { PrivateEnergiesToTaskTemplatesUncheckedCreateWithoutTaskInputSchema } from './PrivateEnergiesToTaskTemplatesUncheckedCreateWithoutTaskInputSchema';

export const PrivateEnergiesToTaskTemplatesUpsertWithWhereUniqueWithoutTaskInputSchema: z.ZodType<Prisma.PrivateEnergiesToTaskTemplatesUpsertWithWhereUniqueWithoutTaskInput> = z.object({
  where: z.lazy(() => PrivateEnergiesToTaskTemplatesWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => PrivateEnergiesToTaskTemplatesUpdateWithoutTaskInputSchema),z.lazy(() => PrivateEnergiesToTaskTemplatesUncheckedUpdateWithoutTaskInputSchema) ]),
  create: z.union([ z.lazy(() => PrivateEnergiesToTaskTemplatesCreateWithoutTaskInputSchema),z.lazy(() => PrivateEnergiesToTaskTemplatesUncheckedCreateWithoutTaskInputSchema) ]),
}).strict();

export default PrivateEnergiesToTaskTemplatesUpsertWithWhereUniqueWithoutTaskInputSchema;
