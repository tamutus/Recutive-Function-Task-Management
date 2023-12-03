import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergiesToProjectsWhereUniqueInputSchema } from './EnergiesToProjectsWhereUniqueInputSchema';
import { EnergiesToProjectsUpdateWithoutProjectInputSchema } from './EnergiesToProjectsUpdateWithoutProjectInputSchema';
import { EnergiesToProjectsUncheckedUpdateWithoutProjectInputSchema } from './EnergiesToProjectsUncheckedUpdateWithoutProjectInputSchema';

export const EnergiesToProjectsUpdateWithWhereUniqueWithoutProjectInputSchema: z.ZodType<Prisma.EnergiesToProjectsUpdateWithWhereUniqueWithoutProjectInput> = z.object({
  where: z.lazy(() => EnergiesToProjectsWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => EnergiesToProjectsUpdateWithoutProjectInputSchema),z.lazy(() => EnergiesToProjectsUncheckedUpdateWithoutProjectInputSchema) ]),
}).strict();

export default EnergiesToProjectsUpdateWithWhereUniqueWithoutProjectInputSchema;
