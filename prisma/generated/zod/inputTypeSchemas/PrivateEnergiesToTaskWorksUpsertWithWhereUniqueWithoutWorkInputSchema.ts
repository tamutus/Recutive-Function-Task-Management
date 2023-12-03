import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateEnergiesToTaskWorksWhereUniqueInputSchema } from './PrivateEnergiesToTaskWorksWhereUniqueInputSchema';
import { PrivateEnergiesToTaskWorksUpdateWithoutWorkInputSchema } from './PrivateEnergiesToTaskWorksUpdateWithoutWorkInputSchema';
import { PrivateEnergiesToTaskWorksUncheckedUpdateWithoutWorkInputSchema } from './PrivateEnergiesToTaskWorksUncheckedUpdateWithoutWorkInputSchema';
import { PrivateEnergiesToTaskWorksCreateWithoutWorkInputSchema } from './PrivateEnergiesToTaskWorksCreateWithoutWorkInputSchema';
import { PrivateEnergiesToTaskWorksUncheckedCreateWithoutWorkInputSchema } from './PrivateEnergiesToTaskWorksUncheckedCreateWithoutWorkInputSchema';

export const PrivateEnergiesToTaskWorksUpsertWithWhereUniqueWithoutWorkInputSchema: z.ZodType<Prisma.PrivateEnergiesToTaskWorksUpsertWithWhereUniqueWithoutWorkInput> = z.object({
  where: z.lazy(() => PrivateEnergiesToTaskWorksWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => PrivateEnergiesToTaskWorksUpdateWithoutWorkInputSchema),z.lazy(() => PrivateEnergiesToTaskWorksUncheckedUpdateWithoutWorkInputSchema) ]),
  create: z.union([ z.lazy(() => PrivateEnergiesToTaskWorksCreateWithoutWorkInputSchema),z.lazy(() => PrivateEnergiesToTaskWorksUncheckedCreateWithoutWorkInputSchema) ]),
}).strict();

export default PrivateEnergiesToTaskWorksUpsertWithWhereUniqueWithoutWorkInputSchema;
