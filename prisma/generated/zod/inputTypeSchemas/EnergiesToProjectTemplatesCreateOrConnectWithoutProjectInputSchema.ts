import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergiesToProjectTemplatesWhereUniqueInputSchema } from './EnergiesToProjectTemplatesWhereUniqueInputSchema';
import { EnergiesToProjectTemplatesCreateWithoutProjectInputSchema } from './EnergiesToProjectTemplatesCreateWithoutProjectInputSchema';
import { EnergiesToProjectTemplatesUncheckedCreateWithoutProjectInputSchema } from './EnergiesToProjectTemplatesUncheckedCreateWithoutProjectInputSchema';

export const EnergiesToProjectTemplatesCreateOrConnectWithoutProjectInputSchema: z.ZodType<Prisma.EnergiesToProjectTemplatesCreateOrConnectWithoutProjectInput> = z.object({
  where: z.lazy(() => EnergiesToProjectTemplatesWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => EnergiesToProjectTemplatesCreateWithoutProjectInputSchema),z.lazy(() => EnergiesToProjectTemplatesUncheckedCreateWithoutProjectInputSchema) ]),
}).strict();

export default EnergiesToProjectTemplatesCreateOrConnectWithoutProjectInputSchema;
