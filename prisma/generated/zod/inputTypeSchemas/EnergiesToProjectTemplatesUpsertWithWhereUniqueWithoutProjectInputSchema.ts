import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergiesToProjectTemplatesWhereUniqueInputSchema } from './EnergiesToProjectTemplatesWhereUniqueInputSchema';
import { EnergiesToProjectTemplatesUpdateWithoutProjectInputSchema } from './EnergiesToProjectTemplatesUpdateWithoutProjectInputSchema';
import { EnergiesToProjectTemplatesUncheckedUpdateWithoutProjectInputSchema } from './EnergiesToProjectTemplatesUncheckedUpdateWithoutProjectInputSchema';
import { EnergiesToProjectTemplatesCreateWithoutProjectInputSchema } from './EnergiesToProjectTemplatesCreateWithoutProjectInputSchema';
import { EnergiesToProjectTemplatesUncheckedCreateWithoutProjectInputSchema } from './EnergiesToProjectTemplatesUncheckedCreateWithoutProjectInputSchema';

export const EnergiesToProjectTemplatesUpsertWithWhereUniqueWithoutProjectInputSchema: z.ZodType<Prisma.EnergiesToProjectTemplatesUpsertWithWhereUniqueWithoutProjectInput> = z.object({
  where: z.lazy(() => EnergiesToProjectTemplatesWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => EnergiesToProjectTemplatesUpdateWithoutProjectInputSchema),z.lazy(() => EnergiesToProjectTemplatesUncheckedUpdateWithoutProjectInputSchema) ]),
  create: z.union([ z.lazy(() => EnergiesToProjectTemplatesCreateWithoutProjectInputSchema),z.lazy(() => EnergiesToProjectTemplatesUncheckedCreateWithoutProjectInputSchema) ]),
}).strict();

export default EnergiesToProjectTemplatesUpsertWithWhereUniqueWithoutProjectInputSchema;
