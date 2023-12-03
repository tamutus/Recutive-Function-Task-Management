import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateEnergiesToProjectsWhereUniqueInputSchema } from './PrivateEnergiesToProjectsWhereUniqueInputSchema';
import { PrivateEnergiesToProjectsUpdateWithoutProjectInputSchema } from './PrivateEnergiesToProjectsUpdateWithoutProjectInputSchema';
import { PrivateEnergiesToProjectsUncheckedUpdateWithoutProjectInputSchema } from './PrivateEnergiesToProjectsUncheckedUpdateWithoutProjectInputSchema';
import { PrivateEnergiesToProjectsCreateWithoutProjectInputSchema } from './PrivateEnergiesToProjectsCreateWithoutProjectInputSchema';
import { PrivateEnergiesToProjectsUncheckedCreateWithoutProjectInputSchema } from './PrivateEnergiesToProjectsUncheckedCreateWithoutProjectInputSchema';

export const PrivateEnergiesToProjectsUpsertWithWhereUniqueWithoutProjectInputSchema: z.ZodType<Prisma.PrivateEnergiesToProjectsUpsertWithWhereUniqueWithoutProjectInput> = z.object({
  where: z.lazy(() => PrivateEnergiesToProjectsWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => PrivateEnergiesToProjectsUpdateWithoutProjectInputSchema),z.lazy(() => PrivateEnergiesToProjectsUncheckedUpdateWithoutProjectInputSchema) ]),
  create: z.union([ z.lazy(() => PrivateEnergiesToProjectsCreateWithoutProjectInputSchema),z.lazy(() => PrivateEnergiesToProjectsUncheckedCreateWithoutProjectInputSchema) ]),
}).strict();

export default PrivateEnergiesToProjectsUpsertWithWhereUniqueWithoutProjectInputSchema;
