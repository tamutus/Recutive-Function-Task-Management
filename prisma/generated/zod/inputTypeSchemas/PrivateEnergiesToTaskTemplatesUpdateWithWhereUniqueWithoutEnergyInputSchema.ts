import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateEnergiesToTaskTemplatesWhereUniqueInputSchema } from './PrivateEnergiesToTaskTemplatesWhereUniqueInputSchema';
import { PrivateEnergiesToTaskTemplatesUpdateWithoutEnergyInputSchema } from './PrivateEnergiesToTaskTemplatesUpdateWithoutEnergyInputSchema';
import { PrivateEnergiesToTaskTemplatesUncheckedUpdateWithoutEnergyInputSchema } from './PrivateEnergiesToTaskTemplatesUncheckedUpdateWithoutEnergyInputSchema';

export const PrivateEnergiesToTaskTemplatesUpdateWithWhereUniqueWithoutEnergyInputSchema: z.ZodType<Prisma.PrivateEnergiesToTaskTemplatesUpdateWithWhereUniqueWithoutEnergyInput> = z.object({
  where: z.lazy(() => PrivateEnergiesToTaskTemplatesWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => PrivateEnergiesToTaskTemplatesUpdateWithoutEnergyInputSchema),z.lazy(() => PrivateEnergiesToTaskTemplatesUncheckedUpdateWithoutEnergyInputSchema) ]),
}).strict();

export default PrivateEnergiesToTaskTemplatesUpdateWithWhereUniqueWithoutEnergyInputSchema;
