import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergiesToProjectsWhereUniqueInputSchema } from './EnergiesToProjectsWhereUniqueInputSchema';
import { EnergiesToProjectsUpdateWithoutProjectInputSchema } from './EnergiesToProjectsUpdateWithoutProjectInputSchema';
import { EnergiesToProjectsUncheckedUpdateWithoutProjectInputSchema } from './EnergiesToProjectsUncheckedUpdateWithoutProjectInputSchema';
import { EnergiesToProjectsCreateWithoutProjectInputSchema } from './EnergiesToProjectsCreateWithoutProjectInputSchema';
import { EnergiesToProjectsUncheckedCreateWithoutProjectInputSchema } from './EnergiesToProjectsUncheckedCreateWithoutProjectInputSchema';

export const EnergiesToProjectsUpsertWithWhereUniqueWithoutProjectInputSchema: z.ZodType<Prisma.EnergiesToProjectsUpsertWithWhereUniqueWithoutProjectInput> = z.object({
  where: z.lazy(() => EnergiesToProjectsWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => EnergiesToProjectsUpdateWithoutProjectInputSchema),z.lazy(() => EnergiesToProjectsUncheckedUpdateWithoutProjectInputSchema) ]),
  create: z.union([ z.lazy(() => EnergiesToProjectsCreateWithoutProjectInputSchema),z.lazy(() => EnergiesToProjectsUncheckedCreateWithoutProjectInputSchema) ]),
}).strict();

export default EnergiesToProjectsUpsertWithWhereUniqueWithoutProjectInputSchema;
