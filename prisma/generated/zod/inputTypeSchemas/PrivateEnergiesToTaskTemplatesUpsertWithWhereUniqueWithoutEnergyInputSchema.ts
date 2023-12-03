import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateEnergiesToTaskTemplatesWhereUniqueInputSchema } from './PrivateEnergiesToTaskTemplatesWhereUniqueInputSchema';
import { PrivateEnergiesToTaskTemplatesUpdateWithoutEnergyInputSchema } from './PrivateEnergiesToTaskTemplatesUpdateWithoutEnergyInputSchema';
import { PrivateEnergiesToTaskTemplatesUncheckedUpdateWithoutEnergyInputSchema } from './PrivateEnergiesToTaskTemplatesUncheckedUpdateWithoutEnergyInputSchema';
import { PrivateEnergiesToTaskTemplatesCreateWithoutEnergyInputSchema } from './PrivateEnergiesToTaskTemplatesCreateWithoutEnergyInputSchema';
import { PrivateEnergiesToTaskTemplatesUncheckedCreateWithoutEnergyInputSchema } from './PrivateEnergiesToTaskTemplatesUncheckedCreateWithoutEnergyInputSchema';

export const PrivateEnergiesToTaskTemplatesUpsertWithWhereUniqueWithoutEnergyInputSchema: z.ZodType<Prisma.PrivateEnergiesToTaskTemplatesUpsertWithWhereUniqueWithoutEnergyInput> = z.object({
  where: z.lazy(() => PrivateEnergiesToTaskTemplatesWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => PrivateEnergiesToTaskTemplatesUpdateWithoutEnergyInputSchema),z.lazy(() => PrivateEnergiesToTaskTemplatesUncheckedUpdateWithoutEnergyInputSchema) ]),
  create: z.union([ z.lazy(() => PrivateEnergiesToTaskTemplatesCreateWithoutEnergyInputSchema),z.lazy(() => PrivateEnergiesToTaskTemplatesUncheckedCreateWithoutEnergyInputSchema) ]),
}).strict();

export default PrivateEnergiesToTaskTemplatesUpsertWithWhereUniqueWithoutEnergyInputSchema;
