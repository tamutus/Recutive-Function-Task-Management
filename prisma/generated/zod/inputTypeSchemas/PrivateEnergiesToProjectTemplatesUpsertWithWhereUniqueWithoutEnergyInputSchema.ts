import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateEnergiesToProjectTemplatesWhereUniqueInputSchema } from './PrivateEnergiesToProjectTemplatesWhereUniqueInputSchema';
import { PrivateEnergiesToProjectTemplatesUpdateWithoutEnergyInputSchema } from './PrivateEnergiesToProjectTemplatesUpdateWithoutEnergyInputSchema';
import { PrivateEnergiesToProjectTemplatesUncheckedUpdateWithoutEnergyInputSchema } from './PrivateEnergiesToProjectTemplatesUncheckedUpdateWithoutEnergyInputSchema';
import { PrivateEnergiesToProjectTemplatesCreateWithoutEnergyInputSchema } from './PrivateEnergiesToProjectTemplatesCreateWithoutEnergyInputSchema';
import { PrivateEnergiesToProjectTemplatesUncheckedCreateWithoutEnergyInputSchema } from './PrivateEnergiesToProjectTemplatesUncheckedCreateWithoutEnergyInputSchema';

export const PrivateEnergiesToProjectTemplatesUpsertWithWhereUniqueWithoutEnergyInputSchema: z.ZodType<Prisma.PrivateEnergiesToProjectTemplatesUpsertWithWhereUniqueWithoutEnergyInput> = z.object({
  where: z.lazy(() => PrivateEnergiesToProjectTemplatesWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => PrivateEnergiesToProjectTemplatesUpdateWithoutEnergyInputSchema),z.lazy(() => PrivateEnergiesToProjectTemplatesUncheckedUpdateWithoutEnergyInputSchema) ]),
  create: z.union([ z.lazy(() => PrivateEnergiesToProjectTemplatesCreateWithoutEnergyInputSchema),z.lazy(() => PrivateEnergiesToProjectTemplatesUncheckedCreateWithoutEnergyInputSchema) ]),
}).strict();

export default PrivateEnergiesToProjectTemplatesUpsertWithWhereUniqueWithoutEnergyInputSchema;
