import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateEnergiesToProjectTemplatesWhereUniqueInputSchema } from './PrivateEnergiesToProjectTemplatesWhereUniqueInputSchema';
import { PrivateEnergiesToProjectTemplatesUpdateWithoutProjectInputSchema } from './PrivateEnergiesToProjectTemplatesUpdateWithoutProjectInputSchema';
import { PrivateEnergiesToProjectTemplatesUncheckedUpdateWithoutProjectInputSchema } from './PrivateEnergiesToProjectTemplatesUncheckedUpdateWithoutProjectInputSchema';

export const PrivateEnergiesToProjectTemplatesUpdateWithWhereUniqueWithoutProjectInputSchema: z.ZodType<Prisma.PrivateEnergiesToProjectTemplatesUpdateWithWhereUniqueWithoutProjectInput> = z.object({
  where: z.lazy(() => PrivateEnergiesToProjectTemplatesWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => PrivateEnergiesToProjectTemplatesUpdateWithoutProjectInputSchema),z.lazy(() => PrivateEnergiesToProjectTemplatesUncheckedUpdateWithoutProjectInputSchema) ]),
}).strict();

export default PrivateEnergiesToProjectTemplatesUpdateWithWhereUniqueWithoutProjectInputSchema;
