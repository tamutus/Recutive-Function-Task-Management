import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergiesToTaskWorksWhereUniqueInputSchema } from './EnergiesToTaskWorksWhereUniqueInputSchema';
import { EnergiesToTaskWorksUpdateWithoutWorkInputSchema } from './EnergiesToTaskWorksUpdateWithoutWorkInputSchema';
import { EnergiesToTaskWorksUncheckedUpdateWithoutWorkInputSchema } from './EnergiesToTaskWorksUncheckedUpdateWithoutWorkInputSchema';
import { EnergiesToTaskWorksCreateWithoutWorkInputSchema } from './EnergiesToTaskWorksCreateWithoutWorkInputSchema';
import { EnergiesToTaskWorksUncheckedCreateWithoutWorkInputSchema } from './EnergiesToTaskWorksUncheckedCreateWithoutWorkInputSchema';

export const EnergiesToTaskWorksUpsertWithWhereUniqueWithoutWorkInputSchema: z.ZodType<Prisma.EnergiesToTaskWorksUpsertWithWhereUniqueWithoutWorkInput> = z.object({
  where: z.lazy(() => EnergiesToTaskWorksWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => EnergiesToTaskWorksUpdateWithoutWorkInputSchema),z.lazy(() => EnergiesToTaskWorksUncheckedUpdateWithoutWorkInputSchema) ]),
  create: z.union([ z.lazy(() => EnergiesToTaskWorksCreateWithoutWorkInputSchema),z.lazy(() => EnergiesToTaskWorksUncheckedCreateWithoutWorkInputSchema) ]),
}).strict();

export default EnergiesToTaskWorksUpsertWithWhereUniqueWithoutWorkInputSchema;
