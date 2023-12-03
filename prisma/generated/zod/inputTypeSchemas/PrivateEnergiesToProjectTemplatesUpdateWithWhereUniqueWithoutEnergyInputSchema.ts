import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateEnergiesToProjectTemplatesWhereUniqueInputSchema } from './PrivateEnergiesToProjectTemplatesWhereUniqueInputSchema';
import { PrivateEnergiesToProjectTemplatesUpdateWithoutEnergyInputSchema } from './PrivateEnergiesToProjectTemplatesUpdateWithoutEnergyInputSchema';
import { PrivateEnergiesToProjectTemplatesUncheckedUpdateWithoutEnergyInputSchema } from './PrivateEnergiesToProjectTemplatesUncheckedUpdateWithoutEnergyInputSchema';

export const PrivateEnergiesToProjectTemplatesUpdateWithWhereUniqueWithoutEnergyInputSchema: z.ZodType<Prisma.PrivateEnergiesToProjectTemplatesUpdateWithWhereUniqueWithoutEnergyInput> = z.object({
  where: z.lazy(() => PrivateEnergiesToProjectTemplatesWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => PrivateEnergiesToProjectTemplatesUpdateWithoutEnergyInputSchema),z.lazy(() => PrivateEnergiesToProjectTemplatesUncheckedUpdateWithoutEnergyInputSchema) ]),
}).strict();

export default PrivateEnergiesToProjectTemplatesUpdateWithWhereUniqueWithoutEnergyInputSchema;
