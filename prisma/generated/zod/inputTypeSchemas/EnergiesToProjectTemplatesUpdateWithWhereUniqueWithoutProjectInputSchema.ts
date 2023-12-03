import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergiesToProjectTemplatesWhereUniqueInputSchema } from './EnergiesToProjectTemplatesWhereUniqueInputSchema';
import { EnergiesToProjectTemplatesUpdateWithoutProjectInputSchema } from './EnergiesToProjectTemplatesUpdateWithoutProjectInputSchema';
import { EnergiesToProjectTemplatesUncheckedUpdateWithoutProjectInputSchema } from './EnergiesToProjectTemplatesUncheckedUpdateWithoutProjectInputSchema';

export const EnergiesToProjectTemplatesUpdateWithWhereUniqueWithoutProjectInputSchema: z.ZodType<Prisma.EnergiesToProjectTemplatesUpdateWithWhereUniqueWithoutProjectInput> = z.object({
  where: z.lazy(() => EnergiesToProjectTemplatesWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => EnergiesToProjectTemplatesUpdateWithoutProjectInputSchema),z.lazy(() => EnergiesToProjectTemplatesUncheckedUpdateWithoutProjectInputSchema) ]),
}).strict();

export default EnergiesToProjectTemplatesUpdateWithWhereUniqueWithoutProjectInputSchema;
