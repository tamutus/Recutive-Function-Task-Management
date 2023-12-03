import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergiesToTaskWorksWhereUniqueInputSchema } from './EnergiesToTaskWorksWhereUniqueInputSchema';
import { EnergiesToTaskWorksUpdateWithoutWorkInputSchema } from './EnergiesToTaskWorksUpdateWithoutWorkInputSchema';
import { EnergiesToTaskWorksUncheckedUpdateWithoutWorkInputSchema } from './EnergiesToTaskWorksUncheckedUpdateWithoutWorkInputSchema';

export const EnergiesToTaskWorksUpdateWithWhereUniqueWithoutWorkInputSchema: z.ZodType<Prisma.EnergiesToTaskWorksUpdateWithWhereUniqueWithoutWorkInput> = z.object({
  where: z.lazy(() => EnergiesToTaskWorksWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => EnergiesToTaskWorksUpdateWithoutWorkInputSchema),z.lazy(() => EnergiesToTaskWorksUncheckedUpdateWithoutWorkInputSchema) ]),
}).strict();

export default EnergiesToTaskWorksUpdateWithWhereUniqueWithoutWorkInputSchema;
